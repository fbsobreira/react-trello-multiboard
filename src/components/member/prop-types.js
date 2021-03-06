import PropTypes from 'prop-types'

export const estimations = PropTypes.shape({
  consumed: PropTypes.number,
  estimated: PropTypes.number,
})

export const member = PropTypes.shape({
  avatarHash: PropTypes.string.isRequired,
  avatarImg: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  isCompanyMember: PropTypes.bool,
  preferred: PropTypes.bool,
  username: PropTypes.string.isRequired,
})

export default {
  error: PropTypes.string,
  estimations,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  member: member.isRequired,
  onClick: PropTypes.func.isRequired,
}
