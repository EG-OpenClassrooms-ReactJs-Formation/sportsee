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
            
            const dataFormated = new UserActivity(
                userId, 
                data.data.sessions
            )
            
            setStateData(dataFormated)
            setStateError(false)
        })
        .catch(err => console.error(err));
    }

    async getUserAverageSession(userId, setStateData, setStateError){
        
        const urlCall = this.apiUrl.concat(`user/${userId}/average-sessions`)

        await fetch(urlCall)
        .then(response => response.json())
        .then(data => {
            
            const dataFormated = new UserAverageSession(
                userId, 
                data.data.sessions
            )
            console.log(dataFormated.sessions[0])
            
            setStateData(dataFormated)
            setStateError(false)
        })
        .catch(err => console.error(err));
    }

    async getUserPerformance(userId, setStateData, setStateError){
        
        const urlCall = this.apiUrl.concat(`user/${userId}/performance `)
        await fetch(urlCall)
        .then(response => response.json())
        .then(data => {
            var dataFormated = new UserPerformance(
                userId,
                data.data.data
            );
            
            setStateData(dataFormated)
            setStateError(false)
        })
        .catch(err => console.error(err));
    }
}