import colors from 'src/styles/colors'
import Button, {buttonProps} from './index'

export const LoginButton = ({style, stylePress, ...props} : buttonProps) => <Button 
        style={{
          backgroundColor: colors.secondary[300],
          borderWidth: 0, borderRadius: 32,
          width:"100%", ...style
        }}
        stylePress={{
          backgroundColor: colors.secondary[200], ...stylePress
        }}
        {...props}
        /> 

