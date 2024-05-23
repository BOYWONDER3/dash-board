import db from "../assets/icons/db.svg";
import course from "../assets/icons/course.svg";
import down from "../assets/icons/down.svg";
import rec from "../assets/icons/rec.svg";
import acc from "../assets/icons/acc.svg";
import box1 from "../assets/images/box1.svg";
import box2 from "../assets/images/box2.svg";
import box3 from "../assets/images/box3.svg";
import grad from "../assets/icons/grad.svg";
import time from "../assets/icons/time.svg";
import dot from "../assets/icons/dot.svg";


export const tabsLists = [
    {
        icon: db,
        title: 'Dashboard',
        isActive: false
    },
    {
        icon: course,
        title: 'My Courses',
        isActive: true
    },
    {
        icon: down,
        title: 'Downloads',
        isActive: false
    },
    {
        icon: rec,
        title: 'Recommended',
        isActive: false
    },
    {
        icon: acc,
        title: 'My Account',
        isActive: false
    },
]

export const courseTabs = [
    {
        title: 'Design',
        isActive: true
    },
    {
        title: 'HTML',
        isActive: false
    },
    {
        title: 'CSS',
        isActive: false
    },
    {
        title: 'JavaScript',
        isActive: false
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
        title2: '5h 40m left',
        isActive: false
    },
    {
        img: box2,
        p: 'User Interface',
        span: 'Introduction to User Interface Design',
        icon: grad,
        title: 'University of Minnesota',
        icon2: time,
        title2: '5h 40m left',
        isActive: true
    },
    {
        img: box3,
        p: 'User Interface',
        span: 'Introduction to User Interface Design',
        icon: grad,
        title: 'University of Minnesota',
        icon2: time,
        title2: '5h 40m left',
        isActive: false
    }
]


export const starBox = [
    {
        span: '100',
        text: 'Tutorials',
        color: "#3D42DD"
    },
    {
        span: '18',
        text: 'Topics',
        color: "#F26D0A"
    },
    {
        span: '128',
        text: 'Excercises',
        color: "#6C00F8"
    }
]

export const writeUp = [
    {
        icon: dot,
        title: 'Illustration Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
        icon: dot, 
        title: 'User Experience Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
]