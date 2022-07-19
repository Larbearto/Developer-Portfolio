import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
	projectId: 'caql76mz',
	dataset: 'production',
	apiVersion: '2022-07-14',
	useCdn: true,
	token:
		'skwYVNTZ0z7kmltFGtCqbDIAEDTcALSpJicAVkZiLuKTNL6qGvVvBgJOAqg2TXYr3jxiiidVpN8RN974pmN1DAqP3x0d72E2Z5Lpe1hMizDUE0IZIR5TxwTsQm1L9wRfQg5edtyeLt2MsyhxnVACnycgNsidcwLg9ZU1IFlpd7y5d19PVMkq'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
