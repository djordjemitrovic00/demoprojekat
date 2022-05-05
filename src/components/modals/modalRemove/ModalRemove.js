import { BackDrop, ModalContentConfirm } from "../../../styled/modalStyled"
import { ModalCloseButton } from "../ModalCloseButton"
import { ModalConfirmAccept } from "./ModalConfirmAccept"
import { ModalConfirmButtons } from "./ModalConfirmButtons"
import { ModalConfirmDecline } from "./ModalConfirmDecline"
import { ModalConfirmText } from "./ModalConfirmText"

export const ModalRemove = (props) => {

    const closeHandler = (event) => {
        event.stopPropagation();
        props.closeFn();
    }
    const acceptHandler = () => {
        props.setAnswer(true);
        props.closeFn();
    }
    const declineHandler = () => {
        props.setAnswer(false);
        props.closeFn();
    }

    return (
        <BackDrop onClick={closeHandler}>
            <ModalContentConfirm onClick={event => event.stopPropagation()}>
                {/* <ModalCloseButton onClick={props.closeFn} title={`Close`} /> */}
                <ModalConfirmText />
                <ModalConfirmButtons>
                    <ModalConfirmDecline onClick={declineHandler}/>
                    <ModalConfirmAccept onClick={acceptHandler}/>
                    
                </ModalConfirmButtons>
            </ModalContentConfirm>            
        </BackDrop>
    )
}