import axios from "axios";

export function PostRequest(request: any,): Promise<any> {
    return axios.post("https://localhost:44326/api/Request", request);
}
