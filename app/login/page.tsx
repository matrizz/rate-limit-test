'use client'
import { useState, useEffect } from 'react'
import { Button, Container, Flex, FormControl, FormLabel, Input, Text, Stack, FormHelperText, ChakraProvider, extendTheme, DarkMode, LightMode, Center } from '@chakra-ui/react'


const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)'
}

const theme = extendTheme({
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles
                            }
                        },
                        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
                        {
                            ...activeLabelStyles
                        },
                        label: {
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: 'absolute',
                            backgroundColor: [
                                '#ffffff',
                                '#121214'
                            ],
                            pointerEvents: 'none',
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: 'left top'
                        }
                    }
                }
            }
        }
    }
})

export const Login = () => {

    useEffect(() => {
        const checkUserAuthentication = () => {
        }
        checkUserAuthentication()
    }, [])

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<{ message: string; htmlSyntax?: boolean }>({ message: '' })

    const handleLogin = async () => {

        const response = await fetch('http://localhost:3001/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
        })

        console.log(response.status)
        if (response.ok) {

            const data = await response.json()

            if (data) {
                window.location.href = '/home'
            }

        } else if (response.status == 429) {
            window.location.href = "/error429"
        } else {

            const data = await response.json()

            if (data) {
                setError({ message: data.message, htmlSyntax: data.htmlSyntax })
            }

        }
    }

    const handleErrorWithHtml = () => {
        let responseText = document.querySelector('.response')
        responseText ? (responseText.innerHTML = error.message) : null
    }
    useEffect(() => {

        handleErrorWithHtml()
    }, [error])

    return (
        <ChakraProvider theme={theme}>

            <Flex placeContent={'center'} className='' placeItems={'center'} h={'100%'}>
                <Container maxW={'3xl'} display={'flex'} placeContent={'center'} placeItems={'center'}>
                    <Flex direction={'column'} maxW={'70%'} w={'100%'}>
                        <form
                            onSubmit={e => {
                                e.preventDefault(), handleLogin()
                            }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <FormControl mt={3} variant="floating" isInvalid={error.message !== '' ? true : false}>
                                <Input
                                    value={login}
                                    autoComplete="off"
                                    onChange={e => {
                                        setLogin(e.target.value)
                                    }}
                                    type="text"
                                    name="login"
                                    placeholder=" "
                                />
                                <FormLabel>Login</FormLabel>
                                <FormHelperText fontSize={'xs'}>Your username</FormHelperText>
                            </FormControl>

                            <FormControl mt={3} mb={2} variant="floating" isInvalid={error.message !== '' ? true : false}>
                                <Input
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value)
                                    }}
                                    type="password"
                                    pr="4.5rem"
                                    name="password"
                                    placeholder=" "
                                />
                                <FormLabel>Password</FormLabel>
                            </FormControl>

                            <Stack mt={2}>
                                <Text fontSize={'sm'}>
                                    <a href='#'>Forgot Password?</a>
                                </Text>
                                <Text fontSize={'sm'}>
                                    <a href='#'>Don't have an account?</a>
                                </Text>
                            </Stack>

                            <Flex color={'red.400'} className="response">
                                {error != undefined ? <Text color={'red'}>{error.message}</Text> : null}
                            </Flex>

                            <Button onClick={handleLogin} type="submit" mt={4} colorScheme="purple">
                                Login
                            </Button>
                        </form>
                    </Flex>
                </Container>
            </Flex>
        </ChakraProvider>
    )
}

export default Login