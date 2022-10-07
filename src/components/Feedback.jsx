//import PropTypes from 'prop-types';
//import { Paragraf, Span } from './User.styled';

import { Statistics } from "./Statistics/Statistics";
import {FeedbackOption} from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/SectionTitle";
import { children } from "react";

export const Feedback = ({
  options,
  countFeedback,
  total,
  countPositiveFeedbackPercentage,
}) => {
  
  return (
    <>
     <Section title="Please leave feedback">{children}</Section>
      
      <FeedbackOption onLeaveFeedback={countFeedback} options={options}/>
      <Statistics total={total} options={options} positivePercentage={countPositiveFeedbackPercentage}/>
      

        </>

  );
};


