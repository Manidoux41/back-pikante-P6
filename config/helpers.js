export const catchErrors = fn => (res,req,next)=> {
    return fn(req, res, next).catch(next)
}