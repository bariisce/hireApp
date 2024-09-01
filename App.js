import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Jobs from "./src/pages/jobs/Jobs";
import JobsDetail from "./src/pages/detail/Detail";
import Favorites from "./src/pages/favorites/Favorite";
import reducer from "./src/context/authProvider/reducer";
import { Provider } from "react-redux";
import store from "./src/context/authProvider/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function ShowFavorites() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{ headerTitleAlign: "center", headerTintColor: "#ef5350" }}
        name="Favorites"
        component={Favorites}
      />
    </Stack.Navigator>
  );
}

function ShowJobs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerTitleAlign: "center", headerTintColor: "#ef5350" }}
        name="Jobs"
        component={Jobs}
      />
      <Stack.Screen
        options={{ headerTitleAlign: "center", headerTintColor: "#ef5350" }}
        name="JobDetail"
        component={JobsDetail}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: "#f25050",
          }}
        >
          <Drawer.Screen name="Jobs" component={ShowJobs} />
          <Drawer.Screen name="Favorites" component={ShowFavorites} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
