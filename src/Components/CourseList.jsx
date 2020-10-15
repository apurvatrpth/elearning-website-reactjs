import android from '../pictures/android.jpg';
import ml from '../pictures/ml.jpeg';
import swift from '../pictures/swift.png';
import webDev from '../pictures/wb.png';
import graphql from '../pictures/graphql.png';
import django from '../pictures/django.jpg';

const Courses = [
  {
    imgsrc: android,
    title: 'android',
  },
  {
    imgsrc: ml,
    title: 'ml',
  },
  {
    imgsrc: swift,
    title: 'swift',
  },
  {
    imgsrc: webDev,
    title: 'webDev',
  },
  {
    imgsrc: graphql,
    title: 'graphql',
  },
  {
    imgsrc: django,
    title: 'django',
  },
];

const CourseImage = {
  android,
  ml,
  swift,
  webDev,
  graphql,
  django,
};

export { CourseImage, Courses };
