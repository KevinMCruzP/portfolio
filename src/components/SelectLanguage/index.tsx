import { Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import Flag from 'react-flagkit'

type LanguageProps = 'pt-BR' | 'es' | 'en'

export function SelectLanguage() {
  const router = useRouter()
  const { i18n } = useTranslation('header')

  const [language, setLanguage] = React.useState(i18n.language as LanguageProps)

  function handleSelectLanguage(language: LanguageProps): void {
    setLanguage(language)

    router.push(router.asPath, undefined, { locale: language })
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton transition= '0.2s filter' _hover={{ filter: 'brightness(1.2)' }}>
        {language === 'pt-BR' ? <Flag country='BR' size={27} />
          : language === 'en' ? <Flag country='US' size={27} />
            : language === 'es' && <Flag country='CL' size={27} />
        }
      </MenuButton>

      <MenuList bg='#1C1C1C' maxH='260px' overflow='auto' border='1px solid #353646'>
        <MenuItem onClick={() => handleSelectLanguage('en')}
          px='5px'
          borderLeft='3px solid transparent'
          justifyContent='space-between'
          fontSize={['sm', 'md', 'md', 'md', 'lg']}
          _hover={{
            borderColor: '#FF0000',
            bg: 'none',
          }}
        >
          <Text>English</Text>
          <Flag country='US' size={22} />
        </MenuItem>

        <MenuItem onClick={() => handleSelectLanguage('pt-BR')}
          px='5px'
          borderLeft='3px solid transparent'
          justifyContent='space-between'
          fontSize={['sm', 'md', 'md', 'md', 'lg']}
          _hover={{
            borderColor: '#FF0000',
            bg: 'none',
          }}
        >
          <Text>Português</Text>
          <Flag country='BR' size={22} />
        </MenuItem>

        <MenuItem onClick={() => handleSelectLanguage('es')}
          px='5px'
          borderLeft='3px solid transparent'
          justifyContent='space-between'
          fontSize={['sm', 'md', 'md', 'md', 'lg']}
          _hover={{
            borderColor: '#FF0000',
            bg: 'none',
          }}
        >
          <Text>Español</Text>
          <Flag country='CL' size={22} />
        </MenuItem>
      </MenuList>
    </Menu>
  )

}