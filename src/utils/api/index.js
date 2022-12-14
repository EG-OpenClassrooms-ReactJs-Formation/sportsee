import { useState, useEffect, useContext } from 'react'
import { UserMainData, UserActivity, UserPerformance, UserAverageSession } from '../../models/models';
/**
* @class ApiService
* @classdesc Class to handle API request
*/
export class ApiService {
    constructor(){
        this.apiUrl = 'http://localhost:4000/';
    }
    /**
    * Get user Main data to fill the icon indicators
    * @param { String } userId
    * @param { StateSetter } setStateData
    * @param { StateSetter } setStateError
    */
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
    /**
    * Get data for the user Activity
    * @param { String } userId
    * @param { StateSetter } setStateData
    * @param { StateSetter } setStateError
    */
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

    /**
    * Get data of the average sessions activity of a user
    * @param { String } userId
    * @param { StateSetter } setStateData
    * @param { StateSetter } setStateError
    */

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

    /**
    * Get data of user performance
    * @param { String } userId
    * @param { StateSetter } setStateData
    * @param { StateSetter } setStateError
    */
    
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