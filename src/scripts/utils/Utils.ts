import * as moment from 'moment';

export const getTime: Function = (time: string): any => moment(time , moment.ISO_8601).fromNow();

export const getTimeFromTimestamp: Function = (time: string): any => moment(time).fromNow();
