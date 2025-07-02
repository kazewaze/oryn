import { useState } from 'react';
import Head from 'next/head';

import {
  Card,
  Alert,
  Toast,
  Badge,
  Button,
  Switch,
  Accordion,
  Navbar,
  Tabs,
  Drawer,
  Modal,
  AdvancedModal
} from '../components';

import { useTheme } from '../components/ThemeContext';

function Home() {
  const { theme } = useTheme();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdvancedModalOpen, setIsAdvancedModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>ORYN - Components Showcase</title>
        <meta name="theme-color" content={theme === 'light' ? '#ececf2' : '#15252d'} />
      </Head>

      <Navbar
        links={[
          { href: 'https://github.com/kazewaze/oryn', label: 'GitHub' }
        ]}
      />

      <main>
        <h1>Components Showcase</h1>

        { /* ALERTS */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Alerts</h2>
          <ul>
            <li>
              <Alert type='info'>
                This is an Info alert!
              </Alert>
            </li>
            <li>
              <Alert type='success'>
                This is a Success alert!
              </Alert>
            </li>
            <li>
              <Alert type='warning'>
                This is a Warning alert!
              </Alert>
            </li>
            <li>
              <Alert type='error'>
                This is an Error alert!
              </Alert>
            </li>
          </ul>
        </div>

        { /* BADGES */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Badges</h2>
          <ul style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <li><Badge>Default</Badge></li>
            <li><Badge color='info'>Info</Badge></li>
            <li><Badge color='success'>Success</Badge></li>
            <li><Badge color='warning'>Warning</Badge></li>
            <li><Badge color='error'>Error</Badge></li>
          </ul>
        </div>

        { /* SWITCH */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Switch</h2>
          <Switch checked={isSwitchOn} onChange={() => setIsSwitchOn(!isSwitchOn)} />
        </div>

        { /* TABS */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Tabs</h2>
          <Tabs
            tabs={[
              { label: "Tab 1", content: <p>First panel</p> },
              { label: "Tab 2", content: <p>Second panel</p> }
            ]}
          />
        </div>

        { /* ACCORDION */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Accordion</h2>
          <Accordion
            allowMultiple
            items={[
              { title: "What is ORYN?", content: "A clean, accessible UI library." },
              { title: "Is it animated?", content: "Yes! Using Framer Motion." }
            ]}
          />
        </div>

        { /* DRAWER */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Drawer</h2>

          <Button onClick={() => setIsDrawerOpen(true)}>
            Open Categories
          </Button>

          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            title="Categories"
            position="auto"
          >
            <ul>
              <li>Overview</li>
              <li>Company News</li>
              <li>Education</li>
              <li>Engineering</li>
              <li>Customer Stories</li>
              <li>Changelog</li>
            </ul>
          </Drawer>
        </div>

        { /* CARD */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Card</h2>
          <Card title='Card Title'>
            <p>The Card Content goes here...</p>
          </Card>
        </div>

        { /* TOAST */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Card with Button + Toast </h2>
          <Card title='Toast'>
            <p>With Card & Button!</p>

            <Button onClick={() => setIsToastVisible(true)}>
              Save
            </Button>
          </Card>
          {
            isToastVisible
            ?
              <Toast
                message="Saved successfully!"
                onClose={() => setIsToastVisible(false)}
              />
            :
              ''
          }
        </div>

        { /* BASIC MODAL + CARD */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Card with Basic Modal</h2>
          <Card title='Action Card'>
            <p>Contains a button that opens a modal with a focus trap.</p>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          </Card>
        </div>

        { /* BASIC MODAL (activated by Card Button above) */ }
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title='Focus Trap Modal'
        >
          <p>Try tabbing around — you can't leave this modal by keyboard until you close it!</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <Button onClick={() => alert('Confirmed!')}>Confirm</Button>
            <Button variant='secondary' onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        { /* ADVANCED MODAL + CARD */ }
        <div style={{ marginTop: '2rem' }}>
          <h2>Card with Advanced Modal</h2>
          <Card title='Action Card'>
            <p>More to this one than meets the eye... ay?</p>
            <Button onClick={() => setIsAdvancedModalOpen(true)}>Open Modal</Button>
          </Card>
        </div>

        { /* ADVANCED MODAL (activated by Card Button above) */ }
        <AdvancedModal
          isOpen={isAdvancedModalOpen}
          onClose={() => setIsAdvancedModalOpen(false)}
          title='Advanced Modal'
        >
          <p>Try pressing the ESC Key! Awww Yeah!</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <Button onClick={() => alert('Confirmed!')}>Confirm</Button>
            <Button variant='secondary' onClick={() => setIsAdvancedModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </AdvancedModal>
      </main>
    </>
  );
}

export default Home;