import React from 'react';
import { Row, Col } from 'antd';
import { storiesOf, addDecorator } from '@storybook/react';
import MediaButton from '../../../src/components/MediaButton';

storiesOf('LS Mobile/Data Display', module)
    .addWithChapters('Media Button', {
        subtitle: 'Buttons which combine media and text',
        chapters: [
            {
                title: 'With Images',
                info: 'These button examples combine and image with text and styles.',
                sections: [
                    {
                        title: 'Square Image',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
                                    <MediaButton.Text>Square</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Circle Image',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" circle />
                                    <MediaButton.Text>Circle</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Rounded Image',
                        info: 'A MediaButton containing an image which has rounded corners.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Image
                                        src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                                        style={{ borderRadius: '25%' }} />
                                    <MediaButton.Text>Rounded</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Rounded Image With Shadow',
                        info: 'A MediaButton containing an image which has rounded corners and a shadow.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Image
                                        src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                                        shadow
                                        style={{ borderRadius: '25%' }} />
                                    <MediaButton.Text>Rounded + Shadow</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Rounded Image with Custom Shadow',
                        info: 'A MediaButton containing an image with custom rounding on the corners and a custom shadow.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Image
                                        src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                                        style={{ borderRadius: '25%', boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)' }} />
                                    <MediaButton.Text>Image</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Image Without Text',
                        info: 'A MediaButton containing an image without text',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Image
                                        src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                                    />
                                </MediaButton>
                            </div>
                        )
                    }
                ]
            },
            {
                title: 'With Icons',
                sections: [
                    {
                        title: 'Square Icon',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Icon type="heart" />
                                    <MediaButton.Text>Square</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Circle Icon',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Icon type="heart" circle />
                                    <MediaButton.Text>Circle</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Rounded Icon',
                        info: 'A MediaButton containing an icon which has custom rounded corners.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Icon
                                        type="heart"
                                        style={{ borderRadius: '25%' }} />
                                    <MediaButton.Text>Rounded</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Shadowed Icon',
                        info: 'A MediaButton containing an icon which has a shadow.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Icon
                                        type="heart"
                                        style={{ borderRadius: '35%' }}
                                        shadow />
                                    <MediaButton.Text>Shadowed</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Shadowed Icon With Fill',
                        info: 'A MediaButton containing an icon which has a shadow and a custom fill.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Icon
                                        type="heart"
                                        shadow
                                        style={{ borderRadius: '35%', backgroundColor: '#ddd', borderColor: '#ddd' }} />
                                    <MediaButton.Text>Custom Fill</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                    {
                        title: 'Custom Icon Styles',
                        info: 'A MediaButton containing an icon which has a shadow and a custom fill.',
                        sectionFn: () => (
                            <div style={{ width: 100 }}>
                                <MediaButton>
                                    <MediaButton.Icon
                                        type="smile"
                                        style={{
                                            borderRadius: '35%',
                                            backgroundColor: '#a4a4a4',
                                            borderColor: '#a4a4a4',
                                            boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)'
                                        }}
                                        iconStyle={{
                                            boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)',
                                            borderRadius: '50%',
                                            color: 'white'
                                        }} />
                                    <MediaButton.Text>Custom Icon Style</MediaButton.Text>
                                </MediaButton>
                            </div>
                        )
                    },
                ]
            }
        ]
    });
