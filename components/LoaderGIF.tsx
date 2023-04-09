import loader from '@/styles/loader.module.css'

const LoaderGIF = () => {
    return (
        <div className={"mb-3 flex w-screen justify-center"}>
            <div className={loader.center}>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
                <div className={loader.wave}></div>
            </div>
        </div>
    )
}

export default LoaderGIF