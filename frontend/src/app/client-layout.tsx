'use client';

import 'reflect-metadata';
import React from 'react';

export const ClientLayout: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>> = ({ children }) => children;
