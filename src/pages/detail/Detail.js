import React from "react";
import { Alert } from "react-native";

import JobDetailCard from '../../components/detailCard/DetailCard'
import { API_DETAIL_URL} from '@env'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'

import { useDispatch, useSelector } from "react-redux";

const Detail = ({route}) => {
    const storeId = useSelector(selector => selector.JobsDetailId)

    const { id } = route.params
    
    const {data, loading, error} = useFetch(API_DETAIL_URL + "/"+ id)
    
    const dispatch = useDispatch()

    const handleJobDetailSelect = () => {
        if (storeId.find(eleman => eleman.id === id)) {
            Alert.alert('Bilgilendirme', 'Bu iş detayları zaten listede yer alıyor.')
        }else {
            dispatch({type: 'ADD_FAVORITED', payload: {data}})
        }
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return <JobDetailCard detail={data} on_click={() => { handleJobDetailSelect}}/>
}

export default Detail;