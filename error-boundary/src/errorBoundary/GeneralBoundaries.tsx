const ShowError = ({ message }: { message: string }) => {
    return <h6>{message}</h6>
}

const GeneralError = () => {
    return <h6>some error occurred</h6>
}

export const GeneralBoundaries = {
    ShowError,
    GeneralError
}