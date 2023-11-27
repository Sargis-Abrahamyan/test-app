import React from 'react';

export interface CardProps {
  maxWidth?: string;
  id?: number;
  name?: string;
  children: React.ReactNode;
  title?: string;
}
