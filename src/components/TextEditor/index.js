// components/TextEditor/index.js

import { Component } from 'react'
import { VscBold } from 'react-icons/vsc'
import { GoItalic } from 'react-icons/go'
import { AiOutlineUnderline } from 'react-icons/ai'
import styled from 'styled-components'

// ─── Styled Components ────────────────────────────────────────────────────────

const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

const EditorCard = styled.div`
  background-color: #1b1c22;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 90%;
  max-width: 900px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    flex-direction: column;
    width: 95%;
  }
`

const LeftPanel = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 24px;
  width: 220px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }
`

const Heading = styled.h1`
  color: #f8fafc;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  align-self: flex-start;

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    margin-bottom: 14px;
  }
`

const EditorImage = styled.img`
  width: 160px;
  margin-bottom: 28px;
  hight: 100vh;
  backgroung-size: cover;

  @media (max-width: 767px) {
    width: 100px;
    margin-bottom: 16px;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #334155;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 90%;
  }
`

const ButtonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 767px) {
    justify-content: start;
    gap: 12px;
  }
`

const ButtonItem = styled.li`
  margin-bottom: 12px;

  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #334155;
  }
`

const RightPanel = styled.div`
  flex: 1;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
`

const RightPanelContainer = styled.div`
  margin: 10px;
  border: 1px solid #334155;
  background-color: #25262c;
  border-radius: 8px;
`

const StyledTextarea = styled.textarea`
  flex: 1;
  width: 100%;
  min-height: 350px;
  border: none;
  background-color: #25262c;
  color: #f8fafc;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 16px;
  resize: none;
  outline: none;
  transition: border-color 0.2s ease;

  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};

  &::placeholder {
    color: #cbd5e1;
  }

  &:focus {
    border-color: #faff00;
  }
`

// ─── Component ────────────────────────────────────────────────────────────────

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prev => ({ isBold: !prev.isBold }))
  }

  onClickItalic = () => {
    this.setState(prev => ({ isItalic: !prev.isItalic }))
  }

  onClickUnderline = () => {
    this.setState(prev => ({ isUnderline: !prev.isUnderline }))
  }

  render() {
    const { isBold, isItalic, isUnderline } = this.state

    return (
      <AppContainer>
        <EditorCard>
          <LeftPanel>
            <Heading>Text Editor</Heading>
            <EditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftPanel>

          <RightPanel>
            <RightPanelContainer>
              <ButtonList>
                <ButtonItem>
                  <IconButton
                    data-testid="bold"
                    isActive={isBold}
                    onClick={this.onClickBold}
                  >
                    <VscBold size={25} />
                  </IconButton>
                </ButtonItem>
                <ButtonItem>
                  <IconButton
                    data-testid="italic"
                    isActive={isItalic}
                    onClick={this.onClickItalic}
                  >
                    <GoItalic size={25} />
                  </IconButton>
                </ButtonItem>
                <ButtonItem>
                  <IconButton
                    data-testid="underline"
                    isActive={isUnderline}
                    onClick={this.onClickUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </IconButton>
                </ButtonItem>
              </ButtonList>
              <Divider />
              <StyledTextarea
                isBold={isBold}
                isItalic={isItalic}
                isUnderline={isUnderline}
                placeholder="Start typing here..."
              />
            </RightPanelContainer>
          </RightPanel>
        </EditorCard>
      </AppContainer>
    )
  }
}

export default TextEditor
