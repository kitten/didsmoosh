import React, { Component } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button`
  display: block;
  box-shadow: rgba(0, 0, 0, 0.0196078) 0 1px 0;
  margin-left: 5px;
  padding: 6px 8px;
  border-radius: 3px;
  background: #d34a99;
  border: none;
  outline: none;
  appearance: none;

  min-width: 40px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background: #d43c88;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, .08);
  }

  &:disabled {
    opacity: 0.5;
    background: rgb(60, 60, 60);
  }
`

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0 1px 0;

  margin: 10px 0 20px 0;
  padding: 12px 16px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #d1d3d4;

  color: rgb(65, 65, 70);
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`

const Val = styled.input.attrs({
  type: 'number',
  min: 1,
  max: 1000,
  step: 1
})`
  display: block;
  width: 100%;

  padding: 0;
  margin: 0;
  background: none;
  border: none;
  appearance: none;
  outline: none;
  color: #0e1e25;
  font-size: 14px;

  padding-top: 12px;
`

class Input extends Component {
  state = {
    val: this.props.value
  }

  plus = () => {
    if (this.props.value >= 1000) return
    this.props.onChange(this.props.value + 5)
  }

  minus = () => {
    if (this.props.value <= 5) return
    this.props.onChange(this.props.value - 5)
  }

  onChange = ({ target: { value } }) => {
    this.setState({ val: value }, () => {
      if (!value) return
      this.props.onChange(value)
    })
  }

  componentWillReceiveProps({ value }) {
    if (value !== this.state.val && value !== this.props.value) {
      this.setState({ val: value })
    }
  }

  render() {
    const { label } = this.props

    return (
      <Wrapper>
        {label}
        <Val value={this.state.val} onChange={this.onChange} />
        <ButtonContainer>
          <Button onClick={this.minus}>-5</Button>
          <Button onClick={this.plus}>+5</Button>
        </ButtonContainer>
      </Wrapper>
    )
  }
}

export default Input
