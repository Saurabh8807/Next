"use client"
export default function ErrorBoundary(){
    return (
        <div>
            <h1>Error Boundary</h1>
            <p>An error occurred, and it was caught by our error boundary.</p>
            <p>This error boundary will now re-render the children if an error occurs.</p>
            <p>Click <a href="/">here</a> to go back to the home page.</p>
            <p>Please note that this is a basic error boundary and doesn't handle all possible errors.</p>
        </div>
    )
}