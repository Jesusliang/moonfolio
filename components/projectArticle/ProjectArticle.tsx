import React, { useState } from 'react'
import {
  Box,
  Link,
  Heading,
  Image,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
interface Props {
  title: string
  description: string
  links?: { key: string; url: string }[]
  image?: string
  video?: string
  poster?: string
}
const ProjectArticle: React.FC<Props> = (props) => {
  const [openContentModal, setOpenContentModal] = useState(false)
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      width="100%"
    >
      <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
        <Box
          width={{ base: '100%', sm: '85%' }}
          height="100%"
          maxHeight="300px"
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%"
          borderRadius="md"
          position={'relative'}
          overflow={'hidden'}
        >
          {props.image ? (
            <Image
              height="100%"
              width="100%"
              src={props.image}
              alt="bookingWidget"
              objectFit="cover"
              objectPosition="top"
            />
          ) : (
            <video
              poster={props.poster}
              preload="none"
              controls
              width={'100%'}
              height="300"
              style={{
                height: '300px',
                objectFit: 'contain',
                background: 'black',
                zIndex: 100
              }}
              src={props.video}
            />
          )}
        </Box>
        <Box
          zIndex="1"
          width={{ base: '120%', md: '100%' }}
          position="absolute"
          height="100%"
          display={{ base: 'none', md: 'block' }}
        >
          <Box
            bgGradient={'radial(blue.600 1px, transparent 1px)'}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" marginTop={{ base: '1rem', md: '0' }}>
        <Heading as={'h4'} marginTop="1" fontSize="3xl">
          {props.title}
        </Heading>
        <Text as="p" marginTop=".25rem" color={'gray.700'} fontSize="lg">
          {props.description}
        </Text>
        <Box marginTop={'1rem'} fontSize="sm">
          {props.links?.map(({ key, url }) => (
            <Text key={props.title + url}>
              {key}:{' '}
              <Link color="blue" href={url} target="_blank">
                {url}
              </Link>
            </Text>
          ))}
        </Box>
      </Box>
      <Modal
        onClose={() => setOpenContentModal(false)}
        isOpen={openContentModal}
        scrollBehavior="inside"
        size="3xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenContentModal(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
export default ProjectArticle
