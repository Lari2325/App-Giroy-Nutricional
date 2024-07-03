import { User } from "./Usuario";

type AuthState = {
    user: User | null;
    loading: boolean;
};

export { AuthState };