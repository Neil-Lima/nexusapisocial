"use client";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@/context/ThemeContext";
import {
  ListContainer,
  PropertyCard,
  PropertyImage,
  PropertyInfo,
  PropertyFeatures,
} from "../../styles/property/MarketplacePropertyListStyles";
import { useMarketplacePropertyList } from "../../utils/property/MarketplacePropertyListUtils";

function MarketplacePropertyListComp() {
  const { theme } = useTheme();
  const { properties, handleContact, handleMessage } =
    useMarketplacePropertyList();

  return (
    <ListContainer theme={theme}>
      <h5>
        <strong>3.915</strong> Casas à venda em Belém - PA
      </h5>
      <ListGroup>
        {properties.map((property) => (
          <PropertyCard key={property.id} theme={theme}>
            <PropertyImage>
              <img src={property.image} alt={property.title} />
            </PropertyImage>
            <PropertyInfo>
              <h4>{property.city}</h4>
              <h6>{property.address}</h6>
              <p>{property.description}</p>
              <PropertyFeatures>
                {property.features.map((feature, index) => (
                  <span key={index} className="feature-badge">
                    <FontAwesomeIcon icon={faStar} /> {feature}
                  </span>
                ))}
              </PropertyFeatures>
              <div className="actions">
                <button onClick={() => handleContact(property.id)}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </button>
                <button onClick={() => handleMessage(property.id)}>
                  <FontAwesomeIcon icon={faCommentDots} />
                </button>
              </div>
            </PropertyInfo>
          </PropertyCard>
        ))}
      </ListGroup>
    </ListContainer>
  );
}

export default MarketplacePropertyListComp;
