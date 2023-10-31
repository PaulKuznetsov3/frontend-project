import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Omit } from 'react-redux';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChenge?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChenge,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocus(false);
    };

    const onFocus = () => {
        setIsFocus(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChenge?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {... otherProps}
                />
                {isFocus && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 8}px` }}
                    />
                )}
            </div>
        </div>
    );
});
