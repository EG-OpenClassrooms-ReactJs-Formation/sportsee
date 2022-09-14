import { useState, useEffect, useContext } from 'react'
import { UserMainData, UserActivity, UserPerformance, UserAverageSession } from '../../models/models';
export class ApiService {
    constructor(){
        this.apiUrl = 'http://localhost:4000/';
    }

    async getUserMainData(userId, setStateData, setStateError){
        
            const urlCall = this.apiUrl.concat(`user/${userId}`)
            await fetch(urlCall)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const dataFormated = new UserMainData(
                    userId, 
                    data.data.userInfos.firstName,
                    data.data.userInfos.lastName,
                    data.data.userInfos.age,
                    data.data.todayScore,
                    data.data.keyData
                )
                
                setStateData(dataFormated)
                setStateError(false)
            })
            .catch(err => console.error(err));
    }

    async getUserActivity(userId, setStateData, setStateError){
        
        const urlCall = this.apiUrl.concat(`user/${userId}/activity`)
        await fetch(urlCall)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const dataFormated = new UserMainData(
                userId, 
                data.data.userInfos.firstName,
                data.data.userInfos.lastName,
                data.data.userInfos.age,
                data.data.todayScore,
                data.data.keyData
            )
            
            setStateData(dataFormated)
            setStateError(false)
        })
        .catch(err => console.error(err));
}
}