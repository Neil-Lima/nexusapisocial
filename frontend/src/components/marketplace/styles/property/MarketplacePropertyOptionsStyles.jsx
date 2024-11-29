'use client';
import styled from 'styled-components';

export const OptionsContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 30px;
    box-shadow: ${props => props.theme.boxShadow};

    .list-group-item {
        background: transparent;
        border: none;
        color: ${props => props.theme.textColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
            background-color: ${props => props.theme.primaryColor};
        }

        &:checked + .slider:before {
            transform: translateX(26px);
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.1);
        transition: .4s;

        &.round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }

        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
        }
    }
`;
