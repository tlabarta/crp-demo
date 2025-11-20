/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ClassConceptItem } from '../models/ClassConceptItem';
import type { DemoCategory } from '../models/DemoCategory';
import type { HealthRes } from '../models/HealthRes';
import type { PredictionResultItem } from '../models/PredictionResultItem';
import type { ScenarioItem } from '../models/ScenarioItem';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class DefaultService {
    constructor(public readonly http: HttpClient) {}
    /**
     * Health Check
     * @returns HealthRes Successful Response
     * @throws ApiError
     */
    public healthCheckApiHealthGet(): Observable<HealthRes> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/health',
        });
    }
    /**
     * Get Scenario List
     * @returns ScenarioItem Successful Response
     * @throws ApiError
     */
    public getScenarioListApiImgRecognScenarioListGet(): Observable<Array<ScenarioItem>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/img_recogn/scenario/list',
        });
    }
    /**
     * Get Prediction Classes List
     * @param scenarioId
     * @returns PredictionResultItem Successful Response
     * @throws ApiError
     */
    public getPredictionClassesListApiImgRecognScenarioScenarioIdClassesGet(
        scenarioId: string,
    ): Observable<Array<PredictionResultItem>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/img_recogn/scenario/{scenario_id}/classes',
            path: {
                'scenario_id': scenarioId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Class Concepts List
     * @param scenarioId
     * @param classId
     * @returns ClassConceptItem Successful Response
     * @throws ApiError
     */
    public getClassConceptsListApiImgRecognScenarioScenarioIdClassesClassIdConceptsGet(
        scenarioId: string,
        classId: string,
    ): Observable<Array<ClassConceptItem>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/img_recogn/scenario/{scenario_id}/classes/{class_id}/concepts',
            path: {
                'scenario_id': scenarioId,
                'class_id': classId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Categorie List
     * @returns DemoCategory Successful Response
     * @throws ApiError
     */
    public getCategorieListApiDemoCategoriesListGet(): Observable<Array<DemoCategory>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/demo_categories/list',
        });
    }
}
