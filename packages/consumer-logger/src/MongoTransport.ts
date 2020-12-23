import LogModel from "./Models/Log";

export default async (chunk: any, enc: any, cb: any) => {
    const {
        time,
        level,
        hostname,
        msg,
        err: { type, message, stack },
        req: {
            method,
            url
        },
        remoteAddress
    } = chunk;

    const newLog = new LogModel({
        time,
        level,
        hostname,
        msg,
        application: process.env.Application || "Default",
        type, 
        errorMessage: message,
        stack,
        method,
        url,
        remoteAddress
    });
    console.log(chunk);
    newLog.save();
    cb();
};
