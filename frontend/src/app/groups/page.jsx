"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "@/context/ThemeContext";
import { GradientBackground } from "@/components/group/styles/GroupStyles";
import GroupListComp from "@/components/group/GroupListComp";
import GroupModalComp from "@/components/group/GroupModalComp";
import GroupSidebarComp from "@/components/group/GroupSidebarComp";
import { useGroupForm } from "@/components/group/utils/GroupUtils";
import NavMenuComp from "@/shared/navbar/NavMenuComp";

export default function GroupPage() {
  const { theme } = useTheme();
  const groupForm = useGroupForm();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>    
       <NavMenuComp />
      <GradientBackground theme={theme}>
     
        <Container>
          <Row>
            <Col lg={3}>
              <GroupSidebarComp
                show={showSidebar}
                onHide={() => setShowSidebar(false)}
              />
            </Col>
            <Col lg={9}>
              <GroupListComp
                showModal={groupForm.showModal}
                handleModalShow={groupForm.handleModalShow}
                searchTerm={groupForm.searchTerm}
                setSearchTerm={groupForm.setSearchTerm}
                filteredGroups={groupForm.filteredGroups}
              />
            </Col>
          </Row>
          <GroupModalComp
            showModal={groupForm.showModal}
            handleModalClose={groupForm.handleModalClose}
            handleCreateGroup={groupForm.handleCreateGroup}
            handleInputChange={groupForm.handleInputChange}
            handleImageUpload={groupForm.handleImageUpload}
            newGroup={groupForm.newGroup}
          />
        </Container>
      </GradientBackground>
    </>
  );
}
