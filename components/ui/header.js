import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Header() {
    return (
        <>
            <title>Spacefire Tasks</title>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h6'>Spacefire Task</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}
