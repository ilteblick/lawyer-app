import React from 'react';
import { Input, Select, Button } from 'antd';
import 'whatwg-fetch';

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

export default class ContactForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fio: '',
            email: '',
            clientType: false,
            message: '',
        };
    }

    onFioChange = (e) => {
        this.setState({
            fio: e.target.value,
        });
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    onTypeChange = (val) => {
        this.setState({
            clientType: val,
        });
    }

    onMessageChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    }

    onSubmit = () => {
        const { fio, email, clientType, message } = this.state;
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fio,
                email,
                message,
                type: ClientTypeSelect.find((x) => x.value === clientType).label,
            }),
        });
    }
    render() {
        const { fio, email, clientType, message } = this.state;
        return (
            <StyledFormContainer>
                <StyledHeader>
                    <StyledHeaderTitle>
                        Будем рады Вам помочь!
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
                              value={fio}
                              placeholder="ФИО"
                              onChange={this.onFioChange}
                            />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <Input
                              style={{ marginBottom: '.5em', height: 50, fontSize: 18 }}
                              placeholder="EMAIL"
                              value={email}
                              onChange={this.onEmailChange}
                            />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <Select
                              style={{ marginBottom: '.5em', height: 50, fontSize: 18, width: '100%' }}
                              placeholder="Тип клиента"
                              value={clientType}
                              onChange={this.onTypeChange}
                            >
                                {ClientTypeSelect.map((client) => (
                                    <Option key={client.key} value={client.value}>{client.label}</Option>)
                                )}

                            </Select>

                        </StyledInputContainer>
                        <StyledInputContainer>
                            <TextArea
                              placeholder="Сообщение"
                              autosize
                              style={{ marginBottom: '.5em', minHeight: 50, fontSize: 18, padding: 11 }}
                              value={message}
                              onChange={this.onMessageChange}
                            />
                        </StyledInputContainer>
                    </StyledInputsContainer>
                    <Button
                      style={{ margin: '1em auto 0', width: 250, height: 50, fontSize: 18 }}
                      onClick={this.onSubmit}
                    >Отправить</Button>
                </div>
            </StyledFormContainer>
        );
    }
}
