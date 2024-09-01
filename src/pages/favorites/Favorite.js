import React from "react";
import { FlatList } from "react-native";

import FavoritesCard from "../../components/favoriteCard/FavoriteCard";
import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
  const data = useSelector((selector) => selector.JobsDetailId);
  const dispatch = useDispatch();
  const renderFavorite = ({ item }) => (
    <FavoritesCard
      data={item}
      onSelect={() => {
        dispatch({ type: "DELETE_FAVORITED", payload: { item } });
      }}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderFavorite}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Favorite;
