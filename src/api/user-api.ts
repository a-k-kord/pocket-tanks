import { HTTPService, httpToServer } from '../modules/http-service/http-service';
import { USER_ROUTES } from '../constants/api-routes';
import type { UserInfoResponse, EmptyResponse } from './types';

export class UserAPI {
    public http: HTTPService;

    constructor(httpInstance: HTTPService) {
        this.http = httpInstance;
    }

    changeProfile(formData: FormData) {
        return this.http.request.put<UserInfoResponse>(
            USER_ROUTES.CHANGE_PROFILE,
            formData,
            this.http.configFormDataAsJSON,
        );
    }

    changeAvatar(formData: FormData) {
        return this.http.request.put<UserInfoResponse>(
            USER_ROUTES.CHANGE_AVATAR,
            formData,
        );
    }

    changePassword(formData: FormData) {
        return this.http.request.put<EmptyResponse>(
            USER_ROUTES.CHANGE_PASSWORD,
            formData,
            this.http.configFormDataAsJSON,
        );
    }

    getUserAvatar() {
        return this.http.request.get<string>(
            USER_ROUTES.GET_AVATAR,
        );
    }
}

export const userAPI = new UserAPI(httpToServer);
