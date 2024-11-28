'use client';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { ContactContainer, ContactForm, ContactOptions } from '../../styles/property/MarketplacePropertyContactStyles';
import { useMarketplacePropertyContact } from '../../utils/property/MarketplacePropertyContactUtils';

function MarketplacePropertyContactComp() {
    const { theme } = useTheme();
    const { contactData, handleSubmit, handleInputChange } = useMarketplacePropertyContact();

    return (
        <ContactContainer theme={theme}>
            <ContactForm theme={theme}>
                <h3>Contatar Vendedor</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="tel" name="phone" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" name="message" onChange={handleInputChange} />
                    </Form.Group>
                    <Button type="submit" variant="primary">Enviar</Button>
                </Form>
            </ContactForm>
            <ContactOptions theme={theme}>
                <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faCalendar} /> Agendar Visita
                </Button>
                <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faComment} /> Chat
                </Button>
            </ContactOptions>
        </ContactContainer>
    );
}

export default MarketplacePropertyContactComp;
