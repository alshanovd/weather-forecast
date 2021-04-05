import { Wind } from 'src/app/features/dashboard/model/wind.model';

export interface Weather {
    temp: string;
    icon: string;
    wind: Wind;
}
