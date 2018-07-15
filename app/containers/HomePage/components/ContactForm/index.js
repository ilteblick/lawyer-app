import React from 'react';
import { Input, Select, Button } from 'antd';

import { StyledFormContainer, StyledInputsContainer, StyledInputContainer, StyledHeader, StyledHeaderTitle, StyledDescription } from './styled';
const Option = Select.Option;
const TextArea = Input.TextArea;

export const ClientTypeSelect = [
    {
        key: 'yes',
        label: 'Да, я потенциальный новый клиент',
        value: '1',
    },
    {
        key: 'no',
        label: 'Нет, я существующий клиент',
        value: '2',
    },
    {
        key: 'other',
        label: 'Остальные',
        value: '3',
    },
];

export default function ContactForm() {
    return (
        <StyledFormContainer>
            <StyledHeader>
                <StyledHeaderTitle>
                    Будем рады вам помочь!
                </StyledHeaderTitle>
                <StyledDescription>
                    Заполните следующую форму или позвоните по телефонам +375 29 6263000, +375 29 6563139.
                </StyledDescription>
            </StyledHeader>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <StyledInputsContainer>
                    <StyledInputContainer>
                        <Input
                          style={{ marginBottom: '.5em', height: 50, fontSize: 18 }}
                          placeholder="ФИО"
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <Input
                          style={{ marginBottom: '.5em', height: 50, fontSize: 18 }}
                          placeholder="EMAIL"
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <Select
                          style={{ marginBottom: '.5em', height: 50, fontSize: 18, width: '100%' }}
                          placeholder="Тип клиента"
                        >
                            {ClientTypeSelect.map((clientType) => (
                                <Option key={clientType.key} value={clientType.value}>{clientType.label}</Option>)
                            )}

                        </Select>

                    </StyledInputContainer>
                    <StyledInputContainer>
                        <TextArea
                          placeholder="Сообщение"
                          autosize
                          style={{ marginBottom: '.5em', minHeight: 50, fontSize: 18, padding: 11 }}
                        />
                    </StyledInputContainer>
                </StyledInputsContainer>
                <Button
                  style={{ margin: '1em auto 0', width: 250, height: 50, fontSize: 18 }}
                >Отправить</Button>
            </div>
        </StyledFormContainer>
    );
}
