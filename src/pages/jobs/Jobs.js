import React from "react";
import { FlatList } from "react-native";
import { API_URL} from '@env'

import JobsCard from '../../components/jobCard/JobCard'
import styles from './Jobs.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'

const Jobs = ({navigation}) => {
    const {data, loading, error} = useFetch(API_URL)

    const renderJobs = ({item}) => <JobsCard style={styles.container} onSelect={() => handleProductSelect(item.id)} data={item}/>

    const handleProductSelect = (id) => {
        navigation.navigate('JobDetail', {id})
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={data.results}
            renderItem={renderJobs}
        />
    )
}
export default Jobs;
