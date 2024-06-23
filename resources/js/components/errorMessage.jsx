export default function ErrorMessage({success,message}){
    return(
        <>
        {
        message &&
        <span className={success?'text-success':'text-danger'}>
            {message}</span>
         }
        </>
    )
}
