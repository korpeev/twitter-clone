import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import cn from 'classnames'

interface NotificationProps {
    body: string;
    title: string;
    isShow: boolean;
    setShow: Dispatch<SetStateAction<boolean>>
}


const Notification: FC<NotificationProps> = ({body, title, isShow, setShow}) => {

    useEffect(() => {
        let inervalID: ReturnType<typeof setInterval>
        if (isShow) {
            inervalID = setInterval(() => {
                setShow(false)
                console.log('test')
            }, 2000)
        }

        return () => {
            clearInterval(inervalID)
        }
    }, [isShow]);

    return (<div
        className={cn('fixed right-1 top-5 translate-x-[150%] duration-300 ease-linear top-2 w-1/4 z-40 transition-transform', {
            'translate-x-[0%]': isShow
        })}>
        <div className='bg-red-500 text-white w-full rounded-md p-2 flex flex-col'>
            <span className='text-2xl'>
                {title}
            </span>
            <span className='text-md'>
                {body}
            </span>
        </div>
    </div>)

};

export default Notification;
