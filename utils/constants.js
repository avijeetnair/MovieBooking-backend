/**
 * This will contain the constants names used through out the code
 */
module.exports = {
    releaseStatus: {
        unrealeased: 'UNRELEASED',
        released: 'RELEASED',
        blocked: 'BLOCKED'
    },
    userStatus: {
        pending: 'PENDING',
        approved: 'APPROVED',
        rejected: 'REJECTED'
    },
    userTypes: {
        customer: 'CUSTOMER',
        admin: 'ADMIN',
        client: 'CLIENT'
    },
    paymentStatus : {
        success : 'SUCCESS',
        failed : 'FAILED'
    },
    bookingStatus : {
        inProgress : 'IN_PROGRESS',
        completed : 'COMPLETED',
        cancelled : 'CANCELLED',
        expired : 'EXPIRED'
    },
    ticketPrice : 150
}