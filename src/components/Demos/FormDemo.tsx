import { useState } from 'react'
import { Form, TextField, Checkbox, Button, Text, Flex, View } from '@adobe/react-spectrum'

export function FormDemo() {
  const [formData, setFormData] = useState({ name: '', email: '', agree: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <View UNSAFE_className="GridItem_preview">
      <Flex direction="column" width="100%" maxWidth="100%" gap="size-150">
        {/* Compact form */}
        <Form 
          onSubmit={handleSubmit}
          validationBehavior="native"
          UNSAFE_style={{ width: '100%' }}
        >
          <Flex direction="column" gap="size-100">
            <TextField
              label="Name"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              isRequired
              UNSAFE_style={{ fontSize: '0.75rem' }}
            />
            
            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              isRequired
              UNSAFE_style={{ fontSize: '0.75rem' }}
            />
            
            <Checkbox
              isSelected={formData.agree}
              onChange={(value) => setFormData({ ...formData, agree: value })}
            >
              <Text UNSAFE_style={{ fontSize: '0.75rem' }}>I agree to terms</Text>
            </Checkbox>
            
            <Button type="submit" variant="accent">
              Submit
            </Button>
          </Flex>
        </Form>

        {/* Form status display */}
        <View backgroundColor={submitted ? 'green-400' : 'gray-400'} padding="size-100" borderRadius="small">
          <Text UNSAFE_style={{ fontSize: '0.75rem' }}>
            {submitted ? '✅ Form submitted!' : 'Fill out the form above'}
          </Text>
        </View>

        <Text UNSAFE_style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Status: {submitted ? 'Submitted' : 'Pending'}
        </Text>
      </Flex>
    </View>
  )
}

export default FormDemo
