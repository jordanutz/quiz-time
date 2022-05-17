import { ReactNode } from "react";

export interface FooterProps {
    modifier?: string;
    children: ReactNode
}

export interface OptionProps {
    isSelected: false;
    option: string; 
    setIsSelected: (value: boolean) => void;
    submitAnswer: (e:any, option: string) => void;
}

export interface ProgressProps {
    isSelected: boolean;
    setIsSelected: (value: boolean) => void;
}