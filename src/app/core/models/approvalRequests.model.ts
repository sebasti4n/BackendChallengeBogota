export interface approvalRequests{
    id? : number,
    title : string,
    requester : string,
    description : string,
    approver : string,
    type : string,
    currentState : string
}