import db from "../assets/icons/db.svg";
// import course from "../assets/icons/course.svg";
import down from "../assets/icons/down.svg";
import rec from "../assets/icons/rec.svg";
import acc from "../assets/icons/acc.svg";
import box1 from "../assets/images/box1.svg";
import box2 from "../assets/images/box2.svg";
import box3 from "../assets/images/box3.svg";
import grad from "../assets/icons/grad.svg";
import time from "../assets/icons/time.svg";


export const tabsLists = [
    {
        icon: db,
        title: 'Dashboard',
        key: 1
    },
    // {
    //     icon: course,
    //     title: 'My Courses',
    //     key: 2
    // },
    {
        icon: down,
        title: 'Downloads',
        key: 3
    },
    {
        icon: rec,
        title: 'Recommended',
        key: 4
    },
    {
        icon: acc,
        title: 'My Account',
        key: 5
    },
]

export const courseTabs = [
    {
        title: 'Design',
        key: 1
    },
    {
        title: 'HTML',
        key: 2
    },
    {
        title: 'CSS',
        key: 3
    },
    {
        title: 'JavaScript',
        key: 4
    }
]

export const boxCourses = [
    {
        img: box1,
        p: 'User Interface',
        span: 'Introduction to User Interface Design',
        icon: grad,
        title: 'University of Minnesota',
        icon2: time,
        title2: '5h 40m left'
    },
    {
        img: box2,
        p: 'User Interface',
        span: 'Introduction to User Interface Design',
        icon: grad,
        title: 'University of Minnesota',
        icon2: time,
        title2: '5h 40m left'
    },
    // {
    //     img: box3,
    //     p: 'User Interface',
    //     span: 'Introduction to User Interface Design',
    //     icon: grad,
    //     title: 'University of Minnesota',
    //     icon2: time,
    //     title2: '5h 40m left'
    // }
]