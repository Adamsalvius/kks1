import React from 'react';
import {  fireEvent, render } from '@testing-library/react';
import Timers from './Timers';
import { Icon } from "@chakra-ui/react";
import { describe, it, expect } from "vitest";


describe('Timers', () => {
  if (typeof window !== 'undefined') {
    // use DOM-specific functions here
  } 
  it('renders a list of timers', () => {
    if (typeof window !== 'undefined') {
    const timers = [
      { id: 1, title: 'Timer 1', duration: 10 },
      { id: 2, title: 'Timer 2', duration: 20 },
      { id: 3, title: 'Timer 3', duration: 30 },
    ];
    const { getByText } = render(<Timers timers={timers} />);
    expect(getByText('Timer 1')).toBeInTheDocument();
    expect(getByText('Timer 2')).toBeInTheDocument();
    expect(getByText('Timer 3')).toBeInTheDocument();
}});

  it('starts a timer when the start button is clicked', () => {
    if (typeof window !== 'undefined') {
    const timers = [
      { id: 1, title: 'Timer 1', duration: 10 },
    ];
    const { getByText } = render(<Timers timers={timers} />);
    fireEvent.click(getByText('Start'));
    expect(getByText('Time remaining: 10 seconds')).toBeInTheDocument();
}});

  it('stops a timer when the stop button is clicked', () => {
    if (typeof window !== 'undefined') {
    const timers = [
      { id: 1, title: 'Timer 1', duration: 10 },
    ];
    const { getByText, queryByText } = render(<Timers timers={timers} />);
    fireEvent.click(getByText('Start'));
    fireEvent.click(getByText('Stop'));
    expect(queryByText('Time remaining: 10 seconds')).toBeNull();
}});

  it('resets a timer when the reset button is clicked', () => {
    if (typeof window !== 'undefined') {
    const timers = [
      { id: 1, title: 'Timer 1', duration: 10 },
    ];
    const { getByText, queryByText } = render(<Timers timers={timers} />);
    fireEvent.click(getByText('Start'));
    fireEvent.click(getByText('Reset'));
    expect(queryByText('Time remaining: 10 seconds')).toBeNull();
}});
});