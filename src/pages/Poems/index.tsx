import React, { useState } from 'react';
import Typed from "react-typed";
import { Container, BodyContainer, OptionsContainer, RedPill, BluePill, SecretTipContainer } from './styles';

const Poem = () => {
    const [nextMessage, setNextMessage] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [secretTip, setScretTip] = useState(false)

    const bluePillMessages = ["realmente temos escolhas?", "alcançar a liberdade requer aventurar", "é realmente isso que deseja?"]
    const randomIndex = Math.floor(Math.random() * bluePillMessages.length)

    const choiced = bluePillMessages[randomIndex]

  return (
    <Container>

    {secretTip && (
       <SecretTipContainer>
          <Typed
          strings={[choiced, "sudo reset all"]}
          typeSpeed={50}
          backSpeed={40}
          cursorChar='$'
          onComplete={() => window.location.reload()}

        />
       </SecretTipContainer>
    )}

    {/* @ts-ignore */}
      <Typed
        strings={["welcome my favorite mushroom"]}
        typeSpeed={40}
        backSpeed={30}
        showCursor={false}
        onComplete={() => setNextMessage(true)}

      />

    {nextMessage && (
      <BodyContainer>
        <Typed
          strings={["selecione um caminho:"
        ]}
          typeSpeed={40}
          backSpeed={40}
          showCursor
          onComplete={() => setShowOptions(true)}
      />
      </BodyContainer>
    )}

    {showOptions && (
      <OptionsContainer>
        <RedPill></RedPill>

        <BluePill onClick={() => setScretTip(true)}></BluePill>
      </OptionsContainer>
    )}
    </Container>
  );
};

export default Poem;
