export const getStatusMessage = (statuses: string[]): 'Checking' | 'Online' | 'Offline' => {
    if (statuses.includes('Checking...')) {
      return 'Checking';
    } else if (statuses.every((status) => status === 'Online')) {
      return 'Online';
    } else {
      return 'Offline';
    }
};