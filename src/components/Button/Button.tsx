import { BaseSyntheticEvent, Component, ReactNode } from "react";
import './Button.css'

interface Props {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: BaseSyntheticEvent) => void;
}

export default class Button extends Component {

  public props: Props;

  constructor(props: Props) {
    super(props)
    this.props = props;
    this.state = { hasError: false };
  }

  render() {
    return (
      <button
        type={ this.props.type ?? 'button' }
        className={ this.props.className ?? 'button' }
        onClick={ this.props.onClick }
      >
        {this.props.children}
      </button>
    )
  }
}
