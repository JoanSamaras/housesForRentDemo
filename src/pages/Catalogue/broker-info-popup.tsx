import { Avatar, Dialog, DialogTitle, ListItem, ListItemAvatar, List, ListItemText } from '@material-ui/core';
import { UserIcon } from 'components/icons';
import React, { FC, useState } from 'react';

type Props = {
    open: boolean 
    email: string
    onClose: () => void
}

export const SimpleDialogDemo: FC<Props> = p => {
 
    return (
        <div>
            <Dialog onClose={ p.onClose } aria-labelledby="simple-dialog-title" open={ p.open }>
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <UserIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ p.email } />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}